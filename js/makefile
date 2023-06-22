#
# project
#
repo = substitute
repo_subdir = $(repo)/js
name = substitute

#
# www calendar
#
sources_html = index.html
sources_css  = substitute.css
sources_js   = substitute.js cookies.js urlparams.js
sources_png  = 
sources_ico  = favicon.ico
sources = $(sources_html) $(sources_css) $(sources_js) $(sources_png) $(sources_ico)

www_prod_user = staasorg
www_prod_site = staas.org
www_prod_root = public_html

www_test_user = root
www_test_site = test
www_test_root = /var/www

www_local_user = $(USER)
www_local_site = $(HOME)
www_local_root = public_html
www_local_path = $(www_local_site)/$(www_local_root)/$(name)
www_local_objs = $(patsubst %.html,$(www_local_path)/%.html,$(sources_html)) $(patsubst %.css,$(www_local_path)/%.css,$(sources_css)) $(patsubst %.js,$(www_local_path)/%.js,$(sources_js)) $(patsubst %.png,$(www_local_path)/%.png,$(sources_png)) $(patsubst %.ico,$(www_local_path)/%.ico,$(sources_ico))

# Targets
local : $(www_local_path) $(www_local_objs)

test :
	rsync -t $(sources) $(www_test_user)@$(www_test_site):$(www_test_root)/$(name)/

prod :
	rsync -t $(sources) $(www_prod_user)@$(www_prod_site):$(www_prod_root)/$(name)/

all : local test prod

# Rules
$(www_local_path) :
	@if [ ! -d "$@" ]; then mkdir -p "$@"; fi

$(www_local_path)/%.html: %.html
	cp $< $@
$(www_local_path)/%.css: %.css
	cp $< $@
$(www_local_path)/%.js: %.js
	cp $< $@
$(www_local_path)/%.png: %.png
	cp $< $@
$(www_local_path)/%.ico: %.ico
	cp $< $@

