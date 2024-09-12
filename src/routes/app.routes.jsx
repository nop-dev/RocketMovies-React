import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home'
import { Profile } from '../pages/Profile'
import { CreateNote } from '../pages/CreateNote'
import { MoviePreview } from '../pages/MoviePreview'

export function AppRoutes() {
    return(
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/newnote' element={<CreateNote />} />
            <Route path='/MoviePreview/:note_id' element={<MoviePreview />} /> // em breve, provavelmente vou alterar aqui, isso é provisório
        </Routes>
    )
}