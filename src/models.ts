export interface AuthContextType {
    user: any;
    login: (user: string) => void;
    logout: () => void;
}

export interface ToDoType {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
