import Image from 'next/image';
import { PortableText } from '@portabletext/react';
import { useFloating, autoUpdate, useHover, useFocus, useInteractions } from '@floating-ui/react';
import { IoIosInformationCircle } from 'react-icons/io';
import { useState } from 'react';
import { urlForImage } from '@/sanity/lib/image';

const componentsPropertyIssue = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[16px]'>{children}</p>,
  },
};

const componentsPropertyIssueGeneric = {
  block: {
    // Ex. 1: customizing common block types
    normal: ({ children }) => <p className='text-[16px] mb-2'>{children}</p>,
  },
  list: {
    bullet: ({children}) => (
      <div className='newlineDisplay p-base my-1 ml-3'>
      <ul className='list-disc list-inside'>{children}</ul>
      </div>
      )
  },
  listItem: {
    bullet: ({children}) => (
      <li className='text-[16px] mb-1 '>{children}</li>
    ),
  },
};

export default function PropertyIssueCard({ issue, color }) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context, floatingStyles } = useFloating({
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus]);

  return (
    <div
      className='border p-6 rounded-[9px] bg-[#E7E7E7] w-full justify-between flex flex-col flex-intitial'
      style={{ borderColor: color }}
    >
      <div className='text-black text-[40px] break-words flex flex-row items-center'>
        {issue.genericPropertyIssue.title}{' '}
        <button ref={refs.setReference} {...getReferenceProps()}>
          <IoIosInformationCircle className='w-10 h-10 ml-2' />
        </button>
        {isOpen && (
          <div
            className='text-white p-4 bg-black text-[18px] z-30 rounded-[9px] border max-w-96'
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
           <PortableText value={issue.genericPropertyIssue.genericContent} components={componentsPropertyIssueGeneric}/>
          </div>
        )}
      </div>
      <div className='flex items-center w-full justify-center my-3'>
        <Image
          src={urlForImage(issue.genericPropertyIssue.image)}
          alt='alt text'
          width={150}
          height={150}
          className='object-fit h-32 w-32'
        />
      </div>
      <div className='min-w-[600px] max-w-[840px]'>
        <PortableText value={issue.content} components={componentsPropertyIssue} />
      </div>
    </div>
  );
}
