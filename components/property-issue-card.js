import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { useFloating, autoUpdate, useHover, useFocus, useInteractions} from '@floating-ui/react';
import { IoIosInformationCircle } from "react-icons/io";
import { useState } from "react";

const componentsPropertyIssue = {
    block: {
      // Ex. 1: customizing common block types
      normal: ({ children }) => <p className='text-[16px]'>{children}</p>,
    },
  };

export default function PropertyIssueCard({issue, color}) {

    const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen)

  const {refs, context, floatingStyles} = useFloating({
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const hover = useHover(context);
  const focus = useFocus(context);


  const {getReferenceProps, getFloatingProps} = useInteractions([
    hover,
    focus,
  ]);

    return (
        <div
        className='border p-6 rounded-[9px] bg-[#E7E7E7] w-full justify-between flex flex-col flex-intitial'
        style={{ borderColor: color }}
      >
        <div className='text-black text-[40px] break-words flex flex-row items-center'>{issue.title} <button ref={refs.setReference} {...getReferenceProps()}><IoIosInformationCircle className='w-10 h-10 ml-2' />
        </button>
        {isOpen && (
          <div className='text-white p-4 bg-black text-[18px] z-30 rounded-[9px] border max-w-96' 
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}>
            <p>
            Identification of property as abstracted, bounded and separate entities
            </p>
            <p>
            Failure to account for trans-boundary systems (e.g. rivers, animal migrations, atmosphere)
            </p>
            <p>
            Rigid boundaries and definitions on what counts as &apos;property&apos; , &apos;property damage&apos; , and externalities limit actions that can be taken by property institutions to mitigate new risks or handle multiple claims
            </p>
            <p>
            The imposition of boundaries onto the relational nature of land allows value not created by the owner to be captured, such as its proximity to infrastructure
            </p>
        </div>
        )}
    
        </div>
        <div className='flex items-center w-full justify-center my-3'>
          <Image
            src='/propertyIssue.png'
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

    )
}