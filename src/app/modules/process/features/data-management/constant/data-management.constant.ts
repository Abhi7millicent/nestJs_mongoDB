export enum DataManagementData {
  I = 'master_data_objects',
  II = 'data_management_info',
}

export const DataManagement: {
  [key in DataManagementData]: string;
} = {
  [DataManagementData.I]: 'master_data_objects',
  [DataManagementData.II]: 'data_management_info',
};

export const master_data_objects = 'mdo_';
export const data_management_info = 'dm_';
