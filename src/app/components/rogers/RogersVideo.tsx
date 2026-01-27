'use client';

import React from 'react';

interface Section {
  type: 'fullVideo' | 'twoColumnsVideo';
  videos?: string[]; // video URLs
  text?: string;

  textOnLeft?: boolean; // only for twoColumnsVideo
}

const sections: Section[] = [
  // 2 full screen videos one after another
  {
      type: 'fullVideo', videos: ['/hero.mp4'],
      
  },
  
{
      type: 'fullVideo', videos: ['/hero.mp4'],
     
  },
  // two columns - left text, right video
  {
    type: 'twoColumnsVideo',
    
    text: 'Our creative approach focused on portraying the brand not just as a service provider, but a partner in success, enabling businesses to stay connected, efficient, and ahead of the curve in todays competitive landscape. Through captivating storytelling and compelling visuals, we emphasized the pivotal role that Rogers plays in empowering small businesses to reach their full potential by capturing the essence of their entrepreneurial journeys.',
    videos: ['/hero.mp4'],
    textOnLeft: true,
  },
  {
      type: 'fullVideo', videos: ['/hero.mp4'],
     
  },
  {
      type: 'fullVideo', videos: ['/hero.mp4'],
     
  },

];

const RogersVideo = () => {
  return (
    <div className="w-full bg-white space-y-5">
      {sections.map((section, i) => {
        if (section.type === 'fullVideo' && section.videos) {
          return section.videos.map((videoSrc, idx) => (
            <div key={`${i}-${idx}`} className="w-full h-screen bg-black flex items-center justify-center">
              <video
                src={videoSrc}
                className="w-full h-full object-cover"
                controls
                autoPlay
                muted
                loop
              />
            </div>
          ));
        }

        if (section.type === 'twoColumnsVideo' && section.videos && section.videos.length > 0) {
          return (
            <div
              key={i}
              className="flex flex-col md:flex-row w-full min-h-[70vh]"
            >
              {section.textOnLeft ? (
                <>
                  <div className="md:w-1/2 flex items-center justify-center p-8 px-4">
                    <p className="text-xl">{section.text}</p>
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center p-4">
                    <video
                      src={section.videos[0]}
                      className="max-h-[80vh] w-full object-contain"
                      controls
                      muted
                      loop
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="md:w-1/2 flex items-center justify-center p-4">
                    <video
                      src={section.videos[0]}
                      className="max-h-[80vh] w-full object-contain"
                      controls
                      muted
                      loop
                    />
                  </div>
                  <div className="md:w-1/2 flex items-center justify-center p-8 px-4">
                    <p className="text-xl">{section.text}</p>
                  </div>
                </>
              )}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RogersVideo;
