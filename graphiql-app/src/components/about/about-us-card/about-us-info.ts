import yana from '../../../assets/img/yana.jpg';
import roman from '../../../assets/img/roman.jpg';
import nikita from '../../../assets/img/nikita.jpg';

export interface IAboutUs {
  name: string;
  img: string;
  info: string;
}

const Roman: IAboutUs = {
  name: 'Roman Sokolov',
  img: roman,
  info: 'Passionate about crafting intuitive user interfaces and diving deep into backend architecture, I aspire to continually grow as a developer, bringing innovative solutions to every project I undertake.',
};

const Nikita: IAboutUs = {
  name: 'Nikita Radevich',
  img: nikita,
  info: 'I have always wanted to try web development because I find its challenges appealing. I know I have much to learn, but with the right approach, I believe I can achieve my goal',
};

const Yana: IAboutUs = {
  name: 'Yana Dyachok',
  img: yana,
  info: 'I love the latest technologies and constant development I want to succeed in my future profession, because it is much better to develop in the field that you like. ',
};

export const aboutUs: IAboutUs[] = [Roman, Nikita, Yana];
