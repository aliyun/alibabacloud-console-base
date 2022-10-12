import {
  TPage
} from '../types';
import {
  generatePageList
} from '../util';

import useModelProps from './_use-model-props';
import usePage from './use-page';
import usePages from './use-pages';

export default function usePageList(): TPage[] {
  const {
    maxPageButton
  } = useModelProps();
  const page = usePage();
  const pages = usePages();
  
  return generatePageList(page, pages, maxPageButton);
}