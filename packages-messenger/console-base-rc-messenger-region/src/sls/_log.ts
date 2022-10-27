import sls from '@alicloud/console-base-log-sls';

export enum ETopicShort {
  CREATED = 'created'
}

export default function log<P = void>(topicShort: ETopicShort, params?: P): void {
  sls(`console_base_messenger_region/${topicShort}`, params);
}
