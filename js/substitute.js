function School(name, phone, address, map, principal, begin, end)
{
    this.name = name
    this.phone = phone
    this.address = address
    this.map = map
    this.principal = principal
    this.begin = begin
    this.end = end
}

var schools = []
schools.push(new School('Buckeye Elementary',   '(440) 352-2191', '175 Buckeye Road, Painesville, OH 44077',      'https://www.google.com/maps/place/175+Buckeye+Rd,+Painesville,+OH+44077/@41.7007931,-81.2650762,17z/data=!3m1!4b1!4m5!3m4!1s0x8831a47b54a8f78d:0xb5395f740254e4cc!8m2!3d41.7007891!4d-81.2628875',         'Cassandre Smolen',    '09:10', '15:40'))
schools.push(new School('Melridge Elementary',  '(440) 352-3854', '6689 Melridge Drive Concord Twp., OH 44077',   'https://www.google.com/maps/place/6689+Melridge+Dr,+Painesville,+OH+44077/@41.6879153,-81.2648697,17z/data=!3m1!4b1!4m5!3m4!1s0x8831a4729e9bc0d7:0x748d00ccffdbf3ba!8m2!3d41.6879113!4d-81.262681',        'Gretchen Wakim',      '09:10', '15:40'))
schools.push(new School('Parkside Elementary',  '(440) 358-8750', '12428 Concord-Hambden Road Concord, OH 44077', 'https://www.google.com/maps/place/12428+Concord+Hambden+Rd,+Painesville,+OH+44077/@41.653727,-81.1964874,17z/data=!3m1!4b1!4m5!3m4!1s0x8831a18fabf504b9:0x71a05ed7f907f40b!8m2!3d41.653723!4d-81.1942987', 'Julie Weber',         '09:10', '15:40'))
schools.push(new School('Riverview Elementary', '(440) 357-6171', '845 Madison Avenue Painesville, OH 44077',     'https://www.google.com/maps/place/845+Madison+Ave,+Painesville,+OH+44077/@41.7238814,-81.2790861,13.25z/data=!4m5!3m4!1s0x8831a33c82fa0a35:0xf15e537fe40e8161!8m2!3d41.7275902!4d-81.2209444',             'Traci Shantery',      '09:10', '15:40'))
schools.push(new School('LaMuth Middle',        '(440) 354-4394', '6700 Auburn Rd, Painesville, OH 44077',        'https://www.google.com/maps/place/6700+Auburn+Rd,+Painesville,+OH+44077/@41.6888277,-81.2469339,17z/data=!3m1!4b1!4m5!3m4!1s0x8831a38bef9a56b1:0x91d481692b59255d!8m2!3d41.6888237!4d-81.2447452',         'Michael Lewis',       '07:40', '15:10'))
schools.push(new School('Riverside Campus',     '(440) 352-3341', '585 Riverside Dr, Painesville, OH 44077',      'https://www.google.com/maps/place/585+Riverside+Dr,+Painesville,+OH+44077/@41.7140795,-81.2196352,17z/data=!3m1!4b1!4m5!3m4!1s0x8831a31aeb35830d:0xfd77dc350fcf2fa7!8m2!3d41.7138467!4d-81.2174582',       'William A. Mayer Jr', '07:10', '14:40'))

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
    html += `  <tr>  <td class='label' >Address</td>    <td class='field'><span><a href="${school.map}" target="_blank">${school.address}</a></scan></td>    </tr>`
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
