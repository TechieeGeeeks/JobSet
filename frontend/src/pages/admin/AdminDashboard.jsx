import StatComponent from '../../components/StatComponent';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import CategoryIcon from '@mui/icons-material/Category';
import { Chart } from "react-google-charts";
import { data, options } from './data/data'
import ChartComponent from '../../components/ChartComponent';

const AdminDashboard = () => {
  return (
    <>
      <div className="bg-blue-500 p-6">
        <h4 className="text-white text-2xl pb-3">Dashboard</h4>
        <div className="flex flex-wrap gap-4">
          <StatComponent
            value="45621"
            icon={<SupervisorAccountIcon className="text-white text-3xl" />}
            description="Administrators"
            money=""
          />
          <StatComponent
            value="450"
            icon={<WorkIcon className="text-white text-3xl" />}
            description="Jobs"
            money=""
          />
          <StatComponent
            value="6548"
            icon={<CategoryIcon className="text-white text-3xl" />}
            description="Jobs categories"
            money=""
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-4">
          <ChartComponent>
            <Chart
              chartType="Bar"
              data={data}
              options={options}
              width="100%"
              height="300px"
              legendToggle
            />
          </ChartComponent>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
