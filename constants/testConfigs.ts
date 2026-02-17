
import { bigFiveConfig } from '../tests/bigfive/config';
import { adhdConfig } from '../tests/adhd/config';
import { eqConfig } from '../tests/eq/config';
import { burnoutConfig } from '../tests/burnout/config';
import { digitalAddictionConfig } from '../tests/digital_addiction/config';
import { depressionConfig } from '../tests/depression/config';
import { impostorConfig } from '../tests/impostor/config';
import { gad7Config } from '../tests/gad7/config';
import { riasecConfig } from '../tests/riasec/config';

export const TEST_CONFIGS: Record<string, any> = {
  bigfive: bigFiveConfig,
  adhd: adhdConfig,
  eq: eqConfig,
  burnout: burnoutConfig,
  digital_addiction: digitalAddictionConfig,
  depression: depressionConfig,
  impostor: impostorConfig,
  gad7: gad7Config,
  riasec: riasecConfig,
};
