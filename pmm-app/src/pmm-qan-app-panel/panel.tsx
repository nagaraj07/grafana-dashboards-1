import React from 'react';
import './panel.scss';
import '../react-plugins-deps/styles.scss';
import '../react-plugins-deps/style.less';
import { UrlParametersProvider } from './QueryAnalytics/StateContext';
import Filters from './QueryAnalytics/Filters/Filters';
import QueryAnalyticsContainer from './QueryAnalytics/DataOutput/QueryAnalyticsContainer';

const SettingsPanel = () => {
  return (
    <UrlParametersProvider>
      <div className={'query-analytics-grid'} id={'antd'}>
        <div className="overview-filters" id="query-analytics-filters">
          <Filters />
        </div>
        <div id="query-analytics-data">
          <QueryAnalyticsContainer />
        </div>
      </div>
    </UrlParametersProvider>
  );
};

export default SettingsPanel;
