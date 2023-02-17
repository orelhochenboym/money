export class SecResponse {
  cik!: number;
  taxonomy!: string;
  tag!: string;
  label!: string;
  description!: string;
  entityName!: string;
  units!: {
    USD?: [
      {
        start: string;
        end: string;
        val: number;
        accn: string;
        fy: number;
        fp: string;
        form: string;
        filed: string;
        frame?: string;
      }
    ];
  };
}
