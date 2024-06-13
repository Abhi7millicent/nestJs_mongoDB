export class AnalyticalDashboardsDto {
  _id: string;
  title: string;
  description: string;
  calculation_logic: string;
  attachments: string[];
  application: string[];
  complexity_level: string[];
  type: string[];
  dashboard_application: string[];
  source_data: string[];
  role: string[];
  activity_id: string[];
  automation_id: string[];
  integration_scenario_id: string[];
  last_modified_by: string;
  is_deleted: boolean;
}

export class UpsertAnalyticalDashboardsDto {
  public _id: string;
  public analytical_dashboards: AnalyticalDashboardsDto[] = [];
}
