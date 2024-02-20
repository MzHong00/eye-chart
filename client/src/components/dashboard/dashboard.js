import { useContext, useEffect, useState } from "react";

import CreateVoteButton from "./createVoteButton";
import Pvote from "../common/Pvote";
import { getMyVote } from "../../fetch/vote";
import { UserContext } from "../../domain/home";

export default function Dashboard() {
    const { user } = useContext(UserContext);
    const [votes, setVotes] = useState();

    useEffect(() => {
        const fetchVotes = async () => {
            const votes = user && await getMyVote(user.id);
            setVotes(votes)
        }
        fetchVotes();
    }, [user]);

    console.log(votes);
    return (
        <div className="text-xl font-sans font-semibold">
            <section>
                <h2>
                    <span>
                        My Votes
                    </span>
                </h2>
                <div className="flex flex-wrap">
                    <CreateVoteButton />
                    {
                        votes && votes.map((vote, idx) =>
                            <Pvote key={idx} profiles_picture={user.picture} vote={vote} />)
                    }
                </div>
            </section>
            <h2>
                <span>
                    Activity
                </span>
            </h2>
        </div>
    )
}