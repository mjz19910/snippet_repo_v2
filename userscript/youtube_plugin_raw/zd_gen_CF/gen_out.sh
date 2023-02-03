BACKUP_DATE=$(date '+%F_%H/%M')
PROJ_DIR="$PWD"
DEST_DIR="userscript/youtube_plugin_raw/zd_gen_CF"
TMP_DIR="/dev/shm/snippet_repo_tmp"
. "$PROJ_DIR/$DEST_DIR/gen_out_support.sh"
function generate_ts_output {
	generate_ts_setup
	tsc -p "$TMP_DIR/userscript" >"$TMP_DIR/errors.out"
	{
		cat "out_prelude.ts"
		echo "export namespace Gen {\n\texport type CF_Generated="
		generate_ts_filter_errors "$TMP_DIR/errors.out" | generate_ts_with_perl | sort -u
		echo "\t\t;"
		echo "}"
	} >"$TMP_DIR/tmp.ts"
	generate_ts_restore
}
generate_ts_output