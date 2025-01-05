import { deleteMethod, get, patch, post } from "@/connections/fetch_wrapper";
import { printToaster } from "@/helpers/helpers";
import { IUser } from "@/interface/IUser";
import { IApiResponse } from "@/interface/manage/IApiResponse";


// export async function getAllRoles(){
//     let data = null;
//     await get(`/accounts/roles/`)
//         .then((res) => {
//             data = res.data as Board;
//         })
//         .catch((error) => {
//             console.error('Error fetching board:', error);
//         });
//     return data;
// }

// export async function fetchBoard(boardId: string): Promise<Board | null> {
//     let data = null;
//     await get(`/${boardId}`)
//         .then((res) => {
//             data = res.data as Board;
//         })
//         .catch((error) => {
//             console.error('Error fetching board:', error);
//         });
//     return data;
// }

// export async function createList(boardId: string, title: string): Promise<List> {
//     let data = {} as List;
//     await post(`/${boardId}/lists`, { title })
//         .then((res) => {
//             data = res.data as List;
//             printToaster(
//                 res.success ? 'List created successfully' : 'List creation failed',
//                 res.success ? 'SUCCESS' : 'ERROR'
//             );
//         })
//         .catch((error) => {
//             console.error('Error creating list:', error);
//         });
//     return data;
// }

// export async function createCard(listId: string, title: string): Promise<Card> {
//     let data = {} as Card;
//     await post(`/api/lists/${listId}/cards`, { title })
//         .then((res) => {
//             data = res.data as Card;
//             printToaster(
//                 res.success ? 'Card created successfully' : 'Card creation failed',
//                 res.success ? 'SUCCESS' : 'ERROR'
//             );
//         })
//         .catch((error) => {
//             console.error('Error creating card:', error);
//         });
//     return data;
// }

// export async function reorderLists(boardId: string, lists: List[]): Promise<void> {
//     await patch(`/${boardId}/lists/reorder`, lists)
//         .then((res) => {
//             printToaster(
//                 res.success ? 'Lists reordered successfully' : 'List reorder failed',
//                 res.success ? 'SUCCESS' : 'ERROR'
//             );
//         })
//         .catch((error) => {
//             console.error('Error reordering lists:', error);
//         });
// }

// export async function reorderCards(listId: string, cards: Card[]): Promise<void> {
//     await patch(`/api/lists/${listId}/cards/reorder`, cards)
//         .then((res) => {
//             printToaster(
//                 res.success ? 'Cards reordered successfully' : 'Card reorder failed',
//                 res.success ? 'SUCCESS' : 'ERROR'
//             );
//         })
//         .catch((error) => {
//             console.error('Error reordering cards:', error);
//         });
// }

export async function deleteList(boardId: string, listId: string): Promise<IApiResponse> {
    let data = {} as IApiResponse;
    await deleteMethod(`/${boardId}/lists/${listId}`)
        .then((res) => {
            data = res;
            printToaster(
                res.success ? 'List deleted successfully' : 'List delete failed',
                res.success ? 'SUCCESS' : 'ERROR'
            );
        })
        .catch((error) => {
            console.error('Error deleting list:', error);
        });
    return data;
}

export async function deleteCard(listId: string, cardId: string): Promise<IApiResponse> {
    let data = {} as IApiResponse;
    await deleteMethod(`/api/lists/${listId}/cards/${cardId}`)
        .then((res) => {
            data = res;
            printToaster(
                res.success ? 'Card deleted successfully' : 'Card delete failed',
                res.success ? 'SUCCESS' : 'ERROR'
            );
        })
        .catch((error) => {
            console.error('Error deleting card:', error);
        });
    return data;
}

//projects
export async function getAllProjects(searchParams = '') {
    let data = {} as unknown as any;
    let url = `/projects/?search=${searchParams}`;

    await get(url).then((res) => {
        data = res.data as any;
    }).catch((error) => {
        console.error('Error fetching: ', error);
    });
    return data;
}

export async function createProject(requestData: any) {
    let data = {} as unknown as IApiResponse
    await post(`/projects/`, requestData).then((res) => {
        data = res;
        printToaster(
            res.success ? 'Project created successfully' : 'Project creation failed',
            res.success ? 'SUCCESS' : 'ERROR'
        );
    }).catch((error) => {

    })

    return data;
}

export async function getOneProject(id: string) {
    let data = {} as unknown as any;
    let url = `/projects/${id}`;

    await get(url).then((res) => {
        data = res.data as any;
    }).catch((error) => {
        console.error('Error fetching: ', error);
    });
    return data;
}

export async function updateProject(id: string, requestData: any) {
    let data = {} as unknown as IApiResponse
    await patch(`/projects/${id}`, requestData).then((res) => {
        data = res
        printToaster(
            res.success ? 'project update successfully' : 'project update failed',
            res.success ? 'SUCCESS' : 'ERROR'
        );
    }).catch((error) => {
    })
    return data;
}

export async function deleteProject(id: string) {
    let data = {} as unknown as IApiResponse
    await deleteMethod(`/projects/${id}`).then((res) => {
        data = res
        printToaster(
            res.success ? 'Project delete successfully' : 'Project delete failed',
            res.success ? 'SUCCESS' : 'ERROR'
        );
    }).catch((error) => {

    })
    return data;
}

//users
export async function getAllUsers(search = ''): Promise<IUser[] | null> {
    let data: IUser[] | null = null;
    await get(`/accounts/users/?search=${search}`)
        .then((res) => {
            data = res.data as IUser[];
        })
        .catch((error) => {
            console.error("Error fetching users:", error);
        });
    return data;
}

//labels
export async function getAllLabels(searchParams = '') {
    let data = {} as unknown as any;
    let url = `/labels/?search=${searchParams}`;

    await get(url).then((res) => {
        data = res.data as any;
    }).catch((error) => {
        console.error('Error fetching: ', error);
    });
    return data;
}


//boards
export async function getAllBoards(searchParams = '') {
    let data = {} as unknown as any;
    let url = `/boards/?search=${searchParams}`;

    await get(url).then((res) => {
        data = res.data as any;
    }).catch((error) => {
        console.error('Error fetching: ', error);
    });
    return data;
}

export async function createBoard(requestData: any) {
    let data = {} as unknown as IApiResponse
    await post(`/boards/`, requestData).then((res) => {
        data = res;
        printToaster(
            res.success ? 'Boards created successfully' : 'Boards creation failed',
            res.success ? 'SUCCESS' : 'ERROR'
        );
    }).catch((error) => {

    })

    return data;
}

export async function updateBoard(id: string, requestData: any) {
    let data = {} as unknown as IApiResponse
    await patch(`/boards/${id}`, requestData).then((res) => {
        data = res
        printToaster(
            res.success ? 'Boards update successfully' : 'Boards update failed',
            res.success ? 'SUCCESS' : 'ERROR'
        );
    }).catch((error) => {
    })
    return data;
}


export async function deleteBoard(id: string) {
    let data = {} as unknown as IApiResponse
    await deleteMethod(`/boards/${id}`).then((res) => {
        data = res
        printToaster(
            res.success ? 'Boards delete successfully' : 'Boards delete failed',
            res.success ? 'SUCCESS' : 'ERROR'
        );
    }).catch((error) => {

    })
    return data;
}