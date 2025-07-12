<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Employee Directory</title>
  <link rel="stylesheet" href="styles/main.css" />
</head>
<body>
  <header>
    <h1>Employee Directory</h1>
    <input type="text" id="searchInput" placeholder="Search by name or email..." />
    <button onclick="openFilter()">Filters</button>
    <a href="form.ftl" class="add-btn">+ Add Employee</a>
  </header>

  <div id="filterPanel" class="filter-panel hidden">
    <h3>Filter Employees</h3>
    <input type="text" id="filterFirstName" placeholder="First Name" />
    <input type="text" id="filterDepartment" placeholder="Department" />
    <input type="text" id="filterRole" placeholder="Role" />
    <button onclick="applyFilters()">Apply</button>
    <button onclick="closeFilter()">Close</button>
  </div>

  <main id="employeeGrid">
    <#list employees as emp>
      <div class="employee-card" data-id="${emp.id}">
        <h2>${emp.firstName} ${emp.lastName}</h2>
        <p>Email: ${emp.email}</p>
        <p>Dept: ${emp.department}</p>
        <p>Role: ${emp.role}</p>
        <button onclick="editEmployee(${emp.id})">Edit</button>
        <button onclick="deleteEmployee(${emp.id})">Delete</button>
      </div>
    </#list>
  </main>

  <footer>
    <label for="pageSize">Items per page:</label>
    <select id="pageSize" onchange="changePageSize()">
      <option value="10">10</option>
      <option value="25">25</option>
      <option value="50">50</option>
    </select>
  </footer>

  <script src="scripts/app.js"></script>
</body>
</html>
