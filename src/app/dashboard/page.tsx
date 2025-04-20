import {DashboardCards} from "@/components/Dashboard/DashboardCards";
import MonthlyExpenseBar from "@/components/Charts/MonthlyExpenseBar";
import {CategoryPieChart} from "@/components/Charts/CategoryPieChart";
import {BudgetComparisonChart} from "@/components/Charts/BudgetComparisonChart";

export default function DashboardPage() {
  const monthlyData = [
    { month: "Jan", expense: 400 },
    { month: "Feb", expense: 300 },
    { month: "Mar", expense: 500 },
    { month: "Apr", expense: 450 },
    { month: "May", expense: 350 },
  ];

  const categoryData = [
    { category: "Food", value: 300 },
    { category: "Rent", value: 800 },
    { category: "Utilities", value: 150 },
    { category: "Entertainment", value: 100 },
  ];

  const budgetComparisonData = [
    { month: "Jan", budgeted: 400, actual: 300 },
    { month: "Feb", budgeted: 800, actual: 800 },
    { month: "Mar", budgeted: 200, actual: 150 },
  ];
  

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-2xl font-bold">Dashboard Overview</h1>

      <DashboardCards />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <MonthlyExpenseBar data={monthlyData} />
        <CategoryPieChart data={categoryData} />
      </div>

      <div>
        <BudgetComparisonChart data={budgetComparisonData} />
      </div>
    </div>
  );
}
