// utils/statusUtils.ts
export const getStatusBgClass = (status: string): string => {
    switch (status) {
        case 'Open':
            return 'bg-primary'; 
        case 'In Progress':
            return 'bg-warning'; 
        case 'Completed':
            return 'bg-success'; 
        case 'Closed':
            return 'bg-danger'; 
        default:
            return 'bg-secondary'; 
    }
};


// utils/statusUtils.ts
export const getStatusBgClassProject = (status: string): string => {
    switch (status.toLowerCase()) { // Ensure case-insensitivity
        case 'active':
            return 'bg-primary'; // Blue
        case 'planned':
            return 'bg-secondary'; // Light blue
        case 'in progress':
            return 'bg-warning'; // Orange
        case 'completed':
            return 'bg-success'; // Green
        case 'closed':
            return 'bg-danger'; // Red
        case 'on hold':
            return 'bg-info'; // Gray
        case 'canceled':
            return 'bg-dark'; // Dark gray
        default:
            return 'bg-dark'; // Light gray or fallback color
    }
};
