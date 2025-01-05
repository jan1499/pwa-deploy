
export const getDotColor = (status: string) => {
    switch (status) {
        case 'Active':
            return 'bg-success';
        case 'In Progress':
            return 'bg-primary';
        case 'Inactive':
            return 'bg-secondary';
        case 'Completed':
            return 'bg-info';
        default:
            return 'bg-light';
    }
};

let lastColor: string | null = null; 

export const getRandomColor = () => {
  const colors = ['bg-success', 'bg-secondary', 'bg-info', 'bg-warning', 'bg-danger', 'bg-light', 'bg-primary'];
  let randomIndex = Math.floor(Math.random() * colors.length);
  
  while (colors[randomIndex] === lastColor) {
    randomIndex = Math.floor(Math.random() * colors.length);
  }

  lastColor = colors[randomIndex]; 
  return colors[randomIndex];
};