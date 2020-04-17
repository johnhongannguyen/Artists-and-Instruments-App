import React , {useState} from 'react'
import {useMutation} from '@apollo/react-hooks'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import {UPDATE_ARTIST} from '../../queries/index'

const UpdateArtist = props =>{
    const [id] = useState(props.id)
    const[firstName, setFirstName] = useState(props.firstName)
    const [lastName, setLastName] = useState(props.lastName)
    const[updateArtist] = useMutation(UPDATE_ARTIST)

    return (
        <form
        onSubmit={e =>{
            e.preventDefault()
            updateArtist({
                variables:{
                    id,
                    firstName,
                    lastName
                },
                optimisticResponse:{
                    __typename: 'Mutation',
                    updateArtist:{
                        __typename:'Artist',
                        id,
                        firstName,
                        lastName
                    }
                }
            })
            props.onButtonClick()
        }}
        >
            <TextField 
            label='First Name'
            defaultValue={firstName}
            placeholder='i.e Paul'
            margin='normal'
            onChange={ e => setFirstName(e.target.value)}
            variant='outlined'
            style={{margin: '10px'}}
            />

            <TextField 
            label='First Name'
            defaultValue={lastName}
            placeholder='i.e Lam'
            margin='normal'
            onChange={ e => setLastName(e.target.value)}
            variant='outlined'
            style={{margin: '10px'}}
            />

            <Button
            type='submit'
            variant='contained'
            color='primary'
            style={{margin:'10px'}}>
                Update Artist
                </Button>

                <Button
            onClick={props.onButtonClick}
            type='submit'
            variant='contained'
            color='secondary'
            style={{margin:'10px'}}>
                Cancel 
                </Button>

        </form>
    )


}

export default UpdateArtist