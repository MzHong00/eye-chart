import { useRef } from 'react';
import { useQuery } from '@tanstack/react-query';

import { BsFire } from "react-icons/bs";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

import { readVoteSortedLikes, readVoteSortedParticipants } from '../../shared/api/vote';

import Pvote from '../../widgets/vote/Pvote';

export default function Explore() {
    const { isPending, data } = useQuery({
        queryKey: ['votes'],
        queryFn: readVoteSortedLikes
    });
    const ref = useRef();

    const rightArrowHandler = () => {
        ref.current.scrollLeft += 400 * 2;
    }
    const leftArrowHandler = () => {
        ref.current.scrollLeft -= 400 * 2;
    }

    return (
        <section>
            <h2>
                <div className='flex items-center'>
                    <BsFire color='red' />
                    <span>Hot</span>
                </div>
                <nav className='flex items-center'>
                    <IoIosArrowDropleft size="30px" onClick={leftArrowHandler} />
                    <IoIosArrowDropright size="30px" onClick={rightArrowHandler} />
                </nav>
            </h2>
            <div ref={ref} className='h-152 flex flex-col flex-wrap justify-between overflow-auto scroll-smooth'>
                {!isPending && data.map((vote, idx) => <Pvote key={idx} vote={vote} />)}
            </div>
        </section>
    )
}