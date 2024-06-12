export class ProcessControlsDto {
  _id: string;
  title: string;
  description: string;
  activity_id: string[];
  mdo_id: string[];
  is_deleted: boolean;
  last_modified_by: string;
}

export class UpsertProcessControlsDto {
  public _id: string;
  public process_controls: ProcessControlsDto[] = [];
}
