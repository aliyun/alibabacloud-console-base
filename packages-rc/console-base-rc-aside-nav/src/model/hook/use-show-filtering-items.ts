import useFiltering from './use-filtering';
import useFilterText from './use-filter-text';

// 判断在搜索状态下，展示 全部数据 或 过滤后的数据
export default function useShowFilteringItems(): boolean {
  const filtering = useFiltering();
  const filterText = useFilterText();

  if (filtering && filterText) {
    return true;
  }

  return false;
}