local test prod all :
	$(MAKE) -C js $@

remote :
	@./remote.sh substitute

