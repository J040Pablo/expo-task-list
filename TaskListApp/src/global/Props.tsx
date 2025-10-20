export interface AuthContextType {
    taskList: Array<PropCard>;
    onOpen: () => void;
    handleEdit: Function;
    handleDelete: Function;
}
export type PropCard = {
    description: string;
    flag: propFlags;
    item: number;
    timeLimit: string;
    title: string;
}


type propFlags = "urgente" | "opcional";