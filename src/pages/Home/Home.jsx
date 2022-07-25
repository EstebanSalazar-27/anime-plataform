import React from 'react'
import { Aside } from '../../components/Aside/Aside'
import { HeadingH3 } from '../../components/HeadingH3/HeadingH3'
import { ListOfAnimes } from '../../components/ListOfAnimes/ListOfAnimes'


export const Home = () => {
    return (
        <div className='w-full  flex-stats-items-start lg:flex-wrap gap-20'>
            <Aside />

            <div className='  flex-stats-col w-full gap-4 '>
                <HeadingH3 fonts="text-3xl">Animes</HeadingH3>
                <ListOfAnimes />
            </div>
        </div>
    )
}
