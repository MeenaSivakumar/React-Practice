import { useCallback, useEffect, useMemo, useState } from "react";
import { EmployeeProps } from "./EmployeeProps.types";

export const DisplayEmployee = () => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const empList = [
    { name: "john", role: "Frontend Developer", dep:"Research" },
    { name: "harry", role: "BackeEnd Developer",dep:"sales"  },
    { name: "mary", role: "Frontend Developer", dep:"marketing"},
  ];
  const [input, setInput] = useState("");
  const [employeesList, setEmployeesList] = useState<EmployeeProps[]>([]);
  //   const employeesList = useMemo(() => {
  //     return empList.filter((e) =>
  //       e.name.toLowerCase().includes(input)
  //     );
  //   }, [input, empList]);

  useEffect(() => {
    setEmployeesList([...employeesList, ...empList]);
  }, []);
  const handleChange = useCallback(
    (e: any) => {
      setInput(e.target.value);
      return setEmployeesList(
        empList.filter((value) => value.dep.toLowerCase().includes(input))
      );
    },
    [input,empList]
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Your Details"
        onChange={handleChange}
      />
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>role</th>
            <th>Dep</th>
          </tr>
        </thead>
        <tbody>
          {employeesList.map((employee, index) => (
            <tr key={index}>
              <td>{employee.name}</td>
              <td>{employee.role}</td>
              <td>{employee.dep}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
