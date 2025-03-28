import React from 'react';
import { getLayout } from '~/components/Sidebar';
import Head from 'next/head';
import { Headline1 } from '~/components/Headlines';
import { SectionContext } from '~/context';
import data from 'data/case-studies.json';
import Card from '~/components/Card';
import { DocsHelp } from '~/components/DocsHelp';
import { useTheme } from 'next-themes';
import NextPrevButton from '~/components/NavigationButtons';

export default function ContentExample() {
  const newTitle = 'Case Studies';
  const fileRenderType = 'tsx';
  const { resolvedTheme } = useTheme();

  const imgUrl = (src: string): string => {
    if (
      resolvedTheme === 'dark' &&
      ['github', '6river'].some((str) => src.includes(str))
    ) {
      return src.replace(/\.(svg)$/, '-white.$1');
    }
    return src;
  };

  return (
    <SectionContext.Provider value='docs'>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{newTitle}</Headline1>
      <p className='text-[18px]'>
        Learn how organizations are adopting JSON Schema to improve data
        management, ensure consistency, and streamline workflows across systems.
      </p>
      <div className='mx-auto my-[10px] mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:w-full'>
        {data.map((element, index) => (
          <Card
            key={index}
            title={element.title}
            body={element.summary}
            image={imgUrl(element.logo)}
            extended={true}
            link={element.links.url}
          />
        ))}
      </div>
      <NextPrevButton
        prevLabel='Use Cases'
        prevURL='/overview/use-cases'
        nextLabel='FAQs'
        nextURL='/overview/faq'
      />
      <DocsHelp fileRenderType={fileRenderType} />
    </SectionContext.Provider>
  );
}
ContentExample.getLayout = getLayout;
