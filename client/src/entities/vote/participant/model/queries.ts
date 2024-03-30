import { useQuery } from "@tanstack/react-query"
import { readVoteListByOwnerId, readVoteListSortedLikes, readVoteListSortedParticipants, readVoteParticipants } from "shared/api"

export const useReadVoteParticipants = (voteId: string) => {
    return useQuery({
        queryKey: ['participant', voteId],
        queryFn: () => readVoteParticipants(voteId)
    })
}
export const useReadVoteListByOwnerId = (ownId: string) => {
    return useQuery({
        queryKey: ['vote', ownId],
        queryFn: () => readVoteListByOwnerId(ownId),
        enabled: !!ownId
    })
};

export const useReadVoteListSortedLikes = () => {
    return useQuery({
        queryKey: ['vote'],
        queryFn: () => readVoteListSortedLikes()
    })
}

export const useReadVoteListSortedParticipants = () => {
    return useQuery({
        queryKey: ['vote'],
        queryFn: () => readVoteListSortedParticipants()
    })
}