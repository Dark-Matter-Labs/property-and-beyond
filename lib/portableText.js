export const HPcomponents = {
  block: {
    // Ex. 1: customizing common block types
    intro: ({ children }) => <p className='intro mb-6'>{children}</p>,
    normal: ({ children }) => <p className='normal mb-4'>{children}</p>,
    small: ({ children }) => <p className='mb-4 small-text'>{children}</p>,
  },
  marks: {
    link: ({ value, children }) => {
      const [_file, id, extension] = value?.file?.asset?._ref.split('-');
      return (
        <a
          href={`https://cdn.sanity.io/files/${
            process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'gg6r1tfm'
          }/${process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'}/${id}.${extension}`}
          target='_blank'
          rel='noreferrer'
        >
          <span className='underline font-bold'>{children}</span>
        </a>
      );
    },
    extLink: ({ value, children }) => {
      return(
        <a target='_blank' rel='noreferrer' href={value?.href}>
          <span className='underline font-bold'>{children}</span>
        </a>
      )
    }
  },
};
