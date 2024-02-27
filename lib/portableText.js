export const HPcomponents = {
  block: {
    // Ex. 1: customizing common block types
    intro: ({ children }) => <p className='intro mb-6'>{children}</p>,
    normal: ({ children }) => <p className='normal mb-4'>{children}</p>,
  },
};
