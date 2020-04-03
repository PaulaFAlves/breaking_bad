import React, { Component } from 'react';
import api from '../../../services/api';

import './styles.css';
import { Link } from 'react-router-dom';

export default class Character extends Component {
    state = {
        character: {},
    }
    async componentDidMount() {
        const { char_id } = this.props.match.params;
        console.log(char_id);
        const response = await api.get(`/characters/${char_id}`);
        this.setState({ character: response.data })
    }

    render() {
        const { character } = this.state;
        console.log(character)

        return (
            <div className="band-info">
                <h1>{character.name}</h1>
                <p>{character.birthday}</p>
                <p>{character.albums}</p>
        <h1>{character.name}</h1>
                <div className="back">
                    <Link to={'/'}>Back</Link>
                </div>
                
            </div>
        )
    }
}