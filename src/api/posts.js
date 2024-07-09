const posts = [
    { id: 1, title: 'Post 1', content: 'Content of Post 1' },
    { id: 2, title: 'Post 2', content: 'Content of Post 2' },
    { id: 3, title: 'Post 3', content: 'Content of Post 3' },
    { id: 4, title: 'Post 4', content: 'Content of Post 4' },
    { id: 5, title: 'Post 5', content: 'Content of Post 5' },
  ];
  
  export const fetchPosts = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts);
      }, 1000); // Simulasi delay jaringan 1 detik
    });
  };
  