import { RuleConfigSeverity } from '@commitlint/types';

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    'body-max-line-length': [RuleConfigSeverity.Disabled] as const,
    'header-max-length': [RuleConfigSeverity.Disabled] as const,
  }
};
