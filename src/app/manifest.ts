import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Leap by LLL',
    short_name: 'Leap by LLL',
    description:
      'Everything AI seamlessly integrated all the modern AI generation tools into one platform.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#020022',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
