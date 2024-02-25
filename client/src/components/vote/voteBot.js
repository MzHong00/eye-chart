import AddChoice from "./addChoice";
import PublicButton from './publicButton'

export default function VoteBot({ vote, setVote }) {

    return (
        <div className={`flex`}>
            <div className={`flex items-center w-full h-full`}>
                <AddChoice sizeClass={'w-[90%] h-10'} setVote={setVote} />
                <PublicButton sizeClass={'w-[10%] h-10'} vote={vote} />
            </div>
        </div>
    )
}