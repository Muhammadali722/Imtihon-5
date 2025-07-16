import SupportSection from './SupportSection';
import Support1 from '../assets/support1.png';
import Support2 from '../assets/support2.png';
import Support3 from '../assets/support3.png';
import Support4 from '../assets/support4.png';

function jsxSupport() {
  const supportData = {
    title: 'Supportive Pages',
    description:
      'Feel the feature of creativity with these inner page layouts that perfectly match your site.',
    sections: [
      {
        images: [
          { src: Support1, alt: 'Home Page Img 1' },
          { src: Support2, alt: 'Home Page Img 2' },
        ],
        labels: ['About Me', 'Blog'],
      },
      {
        images: [
          { src: Support3, alt: 'Home Page Img 3' },
          { src: Support4, alt: 'Home Page Img 4' },
        ],
        labels: ['Blog Single', 'Contact Us'],
      },
    ],
  };

  return <SupportSection {...supportData} />;
}

export default jsxSupport;
