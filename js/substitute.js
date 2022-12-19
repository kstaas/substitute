function School(name, phone, address, principal, begin, end)
{
    this.name = name
    this.phone = phone
    this.address = address
    this.principal = principal
    this.begin = begin
    this.end = end
}

var schools = []
schools.push(new School('Buckeye Elementary',   '(440) 352-2191', '175 Buckeye Road, Painesville, OH 44077',      'Cassandre Smolen',    '0910', '1540'))
schools.push(new School('Melridge Elementary',  '(440) 352-3854', '6689 Melridge Drive Concord Twp., OH 44077',   'Gretchen Wakim',      '0910', '1540'))
schools.push(new School('Parkside Elementary',  '(440) 358-8750', '12428 Concord-Hambden Road Concord, OH 44077', 'Julie Weber',         '0910', '1540'))
schools.push(new School('Riverview Elementary', '(440) 357-6171', '845 Madison Avenue Painesville, OH 44077',     'Traci Shantery',      '0910', '1540'))
schools.push(new School('LaMuth Middle',        '(440) 354-4394', '6700 Auburn Rd, Painesville, OH 44077',        'Michael Lewis',       '0740', '1510'))
schools.push(new School('Riverside Campus',     '(440) 352-3341', '585 Riverside Dr, Painesville, OH 44077',      'William A. Mayer Jr', '0710', '1440'))

window.onload = function()
{
    console.log(`initialize() enter`)

    var selectSchool = document.getElementById('selectSchool')
    for (var i = 0; i < schools.length; i++) {
        var school = schools[i]
        var element = document.createElement('option')
        element.textContent = school.name
        element.value = school.name
        selectSchool.appendChild(element)
        console.log(`initialize() added school name ${school.name}`)
    }

    fillInSchool(schools[0])

    console.log(`initialize() exit`)
}

function fillInSchool(school)
{
    var html = ``
    html += `<table>`
    html += `  <tr>  <td class='label' >School</td>     <td class='field'>${school.name}</td>       </tr>`
    html += `  <tr>  <td class='label' >Phone</td>      <td class='field'>${school.phone}</td>      </tr>`
    html += `  <tr>  <td class='label' >Address</td>    <td class='field'>${school.address}</td>    </tr>`
    html += `  <tr>  <td class='label' >Principal</td>  <td class='field'>${school.principal}</td>  </tr>`
    html += `  <tr>  <td class='label' >Begin</td>      <td class='field'>${school.begin}</td>      </tr>`
    html += `  <tr>  <td class='label' >End</td>        <td class='field'>${school.end}</td>        </tr>`
    html += `</table>`
    document.getElementById('school').innerHTML = html
}

function onSchoolChange()
{
    console.log(`onSchoolChange() enter`)
    var selectSchool = document.getElementById('selectSchool')
    var schoolName = selectSchool.value
    console.log(`onSchoolChange() selection ${schoolName}`)
    for (var i = 0; i < schools.length; i++) {
        var school = schools[i]
        if (schoolName == school.name) {
            fillInSchool(school)
            break
        }
    }
    console.log(`onSchoolChange() exit`)
}
