export interface ICodeGenerator {
  generator?: string;
  begin?: string;
  body?: string[];
  end?: string;
  indent?: number;
}
