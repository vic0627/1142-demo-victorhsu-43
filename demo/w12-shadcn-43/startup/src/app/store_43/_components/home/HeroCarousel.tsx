import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const carouselImages = [
  '/images/store/hero1.jpg',
  '/images/store/hero2.jpg',
  '/images/store/hero3.jpg',
  '/images/store/hero4.jpg',
];

function HeroCarousel() {
  return (
    <div className='hidden lg:block'>
      <h2>HeroCarousel</h2>
    </div>
  );
}
export default HeroCarousel;
