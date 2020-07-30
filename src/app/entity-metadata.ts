import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  DateRange: {}
};

const pluralNames = {
  DateRange: 'DateRange'
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames
};
