export const HPcomponents = {
  block: {
    // Ex. 1: customizing common block types
    intro: ({ children }) => <p className='intro mb-6'>{children}</p>,
    normal: ({ children }) => <p className='normal mb-4'>{children}</p>,
    small: ({children}) => <p className="mb-4 small-text">{children}</p>
  },
  marks: {
    link: ({value, children}) => {
      const { blank, href } = value
      console.log(value, children)
      return blank ?
        <a href={href} target="_blank" rel="noopener"><span className="underline font-bold">{children}</span></a>
        : <a href={href} ><span className="underline font-bold">{children}</span></a>
    }
  }
  
};
