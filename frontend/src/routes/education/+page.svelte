<script>
    import TableCell from "./TableCell.svelte";
import TableHead from "./TableHead.svelte";

</script>
<div class="w-full h-full flex flex-col p-5">
    <table class="">
        <tr>
            <TableHead text="Zeitraum"></TableHead>
            <TableHead text="Einrichtung"></TableHead>
            <TableHead text="Abschluss"></TableHead>
            <TableHead text="Ort"></TableHead>
        </tr>
        <tr>
            <TableCell>
                09/2011 - 10/2015
            </TableCell>
            <TableCell>
                <a target="_blank" href="https://www.gymnasium-marktoberdorf.de/">
                    Gymnasium Marktoberdorf
                </a>
            </TableCell>
            <TableCell>

            </TableCell>
            <TableCell>
                Marktoberdorf, Bayern
            </TableCell>
        </tr>
        <tr>
            <TableCell>
                10/2015 - 07/2019
            </TableCell>
            <TableCell>
                <a href="https://www.anne-augustum.de/de/" target="_blank" rel="noopener noreferrer">
                    Augustum-Annen-Gymnasium
                </a>
            </TableCell>
            <TableCell>
                Abitur
            </TableCell>
            <TableCell>
                Görlitz, Sachsen
            </TableCell>
        </tr>
        <tr>
            <TableCell>
                07/2019 - heute
            </TableCell>
            <TableCell>
                <a href="https://www.hszg.de/" target="_blank" rel="noopener noreferrer">
                    Hochschule Zittau/Görlitz
                </a>
            </TableCell>
            <TableCell>
                Informatik B.Sc.
            </TableCell>
            <TableCell>
                Görlitz, Sachsen
            </TableCell>
        </tr>
    </table>
</div>