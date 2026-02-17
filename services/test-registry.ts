
import React from 'react';
import { TEST_CONFIGS } from '../constants/testConfigs';

// Importação dinâmica (Lazy) para os relatórios para otimizar o bundle
const BigFiveReport = React.lazy(() => import('../tests/bigfive/BigFiveReport'));
const ADHDReport = React.lazy(() => import('../tests/adhd/ADHDReport'));
const BurnoutReport = React.lazy(() => import('../tests/burnout/BurnoutReport'));
const EQReport = React.lazy(() => import('../tests/eq/EQReport'));
const DigitalAddictionReport = React.lazy(() => import('../tests/digital_addiction/DigitalAddictionReport'));
const DepressionReport = React.lazy(() => import('../tests/depression/DepressionReport'));
const ImpostorReport = React.lazy(() => import('../tests/impostor/ImpostorReport'));
const GAD7Report = React.lazy(() => import('../tests/gad7/GAD7Report'));
const RIASECReport = React.lazy(() => import('../tests/riasec/RIASECReport'));

export interface TestRegistryEntry {
  id: string;
  config: any;
  component: React.ComponentType<any>;
}

export const TestRegistry: Record<string, TestRegistryEntry> = {
  bigfive: {
    id: 'bigfive',
    config: TEST_CONFIGS.bigfive,
    component: BigFiveReport,
  },
  adhd: {
    id: 'adhd',
    config: TEST_CONFIGS.adhd,
    component: ADHDReport,
  },
  burnout: {
    id: 'burnout',
    config: TEST_CONFIGS.burnout,
    component: BurnoutReport,
  },
  eq: {
    id: 'eq',
    config: TEST_CONFIGS.eq,
    component: EQReport,
  },
  digital_addiction: {
    id: 'digital_addiction',
    config: TEST_CONFIGS.digital_addiction,
    component: DigitalAddictionReport,
  },
  depression: {
    id: 'depression',
    config: TEST_CONFIGS.depression,
    component: DepressionReport,
  },
  impostor: {
    id: 'impostor',
    config: TEST_CONFIGS.impostor,
    component: ImpostorReport,
  },
  gad7: {
    id: 'gad7',
    config: TEST_CONFIGS.gad7,
    component: GAD7Report,
  },
  riasec: {
    id: 'riasec',
    config: TEST_CONFIGS.riasec,
    component: RIASECReport,
  },
};

export const getTestEntry = (id: string): TestRegistryEntry | undefined => {
  return TestRegistry[id];
};

export const getAllTests = () => Object.values(TestRegistry);
