import React, { useEffect, useState } from 'react';
import { Alert, Input } from 'components';
import { bannerImg } from 'assets';
import moment from 'moment';
import { createFormData, eventSchema } from 'utils';
import {GoDiffAdded} from 'react-icons/go';
import styles from './styles.module.css';

import { addEvent } from 'services';
import { useDispatch, useSelector } from 'react-redux';
import { resetState, saveState } from 'modules';

const Add = () => {
    const state = useSelector(state => state.event.state);
    const dispatch = useDispatch();

    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [participant, setParticipant] = useState("");
    const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
    const [note, setNote] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    useEffect(() => {
        checkState();
    }, [])
    useEffect(() => {
        setState();
    }, [title, location, participant, date, note, image])
    useEffect(() => {
        console.log(state);
    }, [state])
    useEffect(() => {
    }, [error])
    useEffect(() => {
        setError(null);
    }, [success])

    /** APIs */
    const addData = async (data) => {
        try {
            const result = await addEvent(data);
            if (result) {
                setSuccess(["Event added succesfully."]);
                resetForm();
            }
        } catch (error) {
            if (error.response.status === 409) {
                setError(['There is already an event with the name "' + title + '"'])
            } else {
                setError(['Something was wrong :( . Failed to add event.'])
            }
            console.log(error.response);
        }
    }    

    /** Logics */
    const checkState = () => {
        if (state) {
            console.log(state, 'my state');
            setTitle(state.title);
            setLocation(state.location);
            setParticipant(state.participant);
            setDate(state.date);
            setNote(state.note);
            setImage(state.image);
        }
    }
    const setState = () => {
        const newState = {
            title, 
            location,
            participant,
            date,
            note,
            image
        }
        dispatch(saveState(newState));
    }
    const clearState = () => {
        resetForm();
        dispatch(resetState());
    }
    const submitEvent = async () => {
        let errors = [];
        if (date < moment().format('YYYY-MM-DD')) errors.push('"date" cannot be earlier than today');
        if (errors.length > 0) setError(errors);
        
        const data = {
            title,
            location,
            participant,
            note
        }
        const validation = eventSchema.validate(data);
        validation.then(() => {
            if (!image) {
                setError(['"image" is not allowed to be empty']);
                return;
            }
            data.date = date;
            data.image = image;
            const formData = createFormData(data);
            addData(formData);
        }).catch(() => {
            const error = validation.error.details[0].message;
            errors.push(error);
            if (errors.length > 0) setError(errors);
        })
    }
    const resetForm = () => {
        setTitle("");
        setLocation("");
        setParticipant("");
        setDate(moment().format('YYYY-MM-DD'));
        setNote("");
        setImage("");
        setError(null);
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card1}>
                    <div className={styles.label}>
                        <p className={styles.p}> <GoDiffAdded /> Add Event</p>
                    </div>
                    <form>
                        <Input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)} value={title}/>
                        <Input type="text" placeholder="Location" onChange={(e) => setLocation(e.target.value)} value={location}/>
                        <Input type="text" placeholder="Participant" onChange={(e) => setParticipant(e.target.value)} value={participant}/>
                        <Input type="date" placeholder="Date" onChange={(e) => setDate(e.target.value)} value={date}/>
                        <Input type="textarea" placeholder="Note" onChange={(e) => setNote(e.target.value)} value={note}/>
                        <Input type="file" onChange={(e) => setImage(e.target.files[0])}/>
                        <Input type="reset" title="clear" onClick={() => clearState()}/>
                        <Input type="button" title="Add" onClick={() => submitEvent()}/>
                    </form>
                </div>
                <div className={styles.card2}>
                    <img className={styles.banner} src={bannerImg} alt="banner" />
                </div>
            </div>
            {success && <Alert type="success" message={success} />}
            {error && <Alert type="error" message={error} />}
        </>
    )
}

export default React.memo(Add);