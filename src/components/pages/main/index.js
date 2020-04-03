import React, { Component } from 'react';
import api from '../../../services/api';
import { Link } from 'react-router-dom';

import './styles.css';

export default class Main extends Component {
    state = {
        characters: []
    };

    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = async () => {
        const response = await api.get('/characters');

        this.setState({ characters: response.data })
        
    }


    render() {
        return (
            <div className='bands-list'>
                {this.state.characters.map(character => (
                    <article key={character.char_id}>
                        <div className='band-image'>
                            <img src={character.img} />  
                            </div>  
                        <strong>{character.name}</strong>  
                        <p>Birthday: {character.birthday}</p> 
                        <p>Occupation: {character.occupation[0]}</p>
                        <p>Nickname: {character.nickname}</p>
                        <p>Status:</p>
                        <p className="alertSpoiler">Spoiler alert!! Pass cursor down here to unlock ;)</p>
                        
                        <p className="spoiler">{character.status}</p>
                        {/* <Link to={`/characters/${character.char_id}`}>Read more</Link> */}
                        
                    </article>
                ))}
            </div>
        )
}
}
