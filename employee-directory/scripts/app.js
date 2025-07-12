let employees = JSON.parse(localStorage.getItem("employees")) || [];

function handleFormSubmit(e) {
  e.preventDefault();
  const id = document.getElementById("empId").value;
  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const department = document.getElementById("department").value.trim();
  const role = document.getElementById("role").value.trim();

  if (!firstName || !lastName || !email || !department || !role) {
    alert("Please fill in all fields.");
    return;
  }

  if (!email.includes("@")) {
    alert("Invalid email format.");
    return;
  }

  const employeeData = { id: id || Date.now(), firstName, lastName, email, department, role };

  if (id) {
    employees = employees.map(emp => (emp.id == id ? employeeData : emp));
  } else {
    employees.push(employeeData);
  }

  localStorage.setItem("employees", JSON.stringify(employees));
  window.location.href = "index.ftl";
}

function deleteEmployee(id) {
  if (confirm("Are you sure you want to delete this employee?")) {
    employees = employees.filter(emp => emp.id !== id);
    localStorage.setItem("employees", JSON.stringify(employees));
    location.reload();
  }
}

function editEmployee(id) {
  const employee = employees.find(emp => emp.id === id);
  localStorage.setItem("editEmp", JSON.stringify(employee));
  window.location.href = "form.ftl";
}

function openFilter() {
  document.getElementById("filterPanel").classList.remove("hidden");
}

function closeFilter() {
  document.getElementById("filterPanel").classList.add("hidden");
}

function applyFilters() {
  const fname = document.getElementById("filterFirstName").value.toLowerCase();
  const dept = document.getElementById("filterDepartment").value.toLowerCase();
  const role = document.getElementById("filterRole").value.toLowerCase();
}
