import React from 'react';
import Dropzone from 'react-dropzone';
import { useDispatch } from 'react-redux';

import { uploadRequest } from '../../store/modules/uploads/actions';

import { Container, Header } from './styles';

const Content = () => {
    const dispatch = useDispatch();

    const handleUpload = (files) => {
        dispatch(uploadRequest(files))
    }

    return (
        <Container>
            <Header>
            <h2>Uploads</h2>
            <Dropzone onDropAccepted={handleUpload}>
                {({ getInputProps, getRootProps }) => (
                    <div className="uploads" {...getRootProps()}>
                        <input {...getInputProps()} />

                        <button type="submit">New</button>
                    </div>
                )}
            </Dropzone>
            </Header>
        </Container>
    )
}

export default Content;