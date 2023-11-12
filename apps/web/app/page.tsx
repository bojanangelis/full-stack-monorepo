import Image from 'next/image';
import { gql } from '../data-access/graphql-client';
import { webEnv } from '../environments/environment';
import Link from 'next/link';
import { rgbToDataUrl } from '@full-stack/web/utils-shared';

const { storage } = webEnv;
export default async function Index() {
  const { homeBlocks } = await gql.GetHomeImages();

  return (
    <div className="grid gap-4 lg:grid-cols-2 lg:gap-7 xl:gap-12">
      {homeBlocks.map((block) => {
        const { r, g, b } = block.rgbBackground;
        return (
          <Link
            href={block.navigationPath}
            key={block.id}
            className="flex h-[calc(50vh-5.5rem)] min-h-[232px] items-center justify-center gap-4 overflow-hidden sm:h-[auto] md:h-[calc(50vh-7.5rem)] lg:h-[calc(100vh-18rem)]"
          >
            <Image
              src={`${storage.url}${block.imagePath}`}
              alt={block.title}
              height={774}
              width={774}
              className={
                'hover:transition-{scale} h-full object-cover duration-1000 hover:scale-105'
              }
              placeholder="blur"
              blurDataURL={rgbToDataUrl(r, g, b)}
              title={block.title}
            />
          </Link>
        );
      })}
    </div>
  );
}
